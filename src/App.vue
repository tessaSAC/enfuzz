<!-- Elegantly unscramble this input using the space provided. Then write the scrambler that made it. The answer is an object with global scope that can scramble and unscramble any text any number of times. -->

<template>
<el-row :gutter="20" class="App"><el-col :span="8" :offset="8">

  <h1>enfuzz</h1>

<!-- INPUT -->
  <el-form ref="form" :model="form" label-width="120px" label-position="top">

    <el-form-item label="input">
      <el-input
        type="textarea"
        :placeholder="placeholder"
        v-model="form.input"
      />
    </el-form-item>


    <el-form-item :label="directionLabel">
      <el-switch v-model="form.direction" @change="clearOutput" />
    </el-form-item>

    <el-form-item v-show="form.direction" label="encoding">
      <el-select
        v-model="form.encodingSelected"
        placeholder="please select an encoding"
        @change="translate"
      >
        <el-option
          v-for="(encoding, label) in typefaces"
          :key="label"
          :label="label"
          :value="label"
        />
      </el-select>
    </el-form-item>

    <el-form-item>
      <el-button type="primary" @click="translate">{{ directionLabel }}</el-button>
    </el-form-item>

  </el-form>

<!-- OUTPUT -->

  <el-form label-position="top" v-show="form.direction" >
    <el-form-item :label="whichOutputLabel">
      <el-switch v-model="whichOutput" />
    </el-form-item>
  </el-form>

  <p
    v-if="whichOutput"
    v-html="output"
    :class="form.encodingSelected"
  />
  <p v-else class="pleb">{{ output }}</p>


  <audio autoplay loop>
    <source src="./assets/meowmix.ogg" type="audio/ogg">
    Your browser does not support the <code>audio</code> element.
  </audio>

</el-col></el-row>
</template>

<script>
export default {
  data() {
    return {

      // Settings:
      maxRandom: 50,
      typefaces: {
        pleb: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*(){}:',
        nyan: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
      },

      // Form data:
      placeholder: 'Elegantly unscramble this input using the space provided. Then write the scrambler that made it. The answer is an object with global scope that can scramble and unscramble any text any number of times.',
      form: {
        input: '',
        encodingSelected: 'nyan',
        direction: true
      },

      // Result:
      output: '',
      whichOutput: false,

    }
  },

  computed: {
    alphabet() {
      return this.typefaces[this.form.encodingSelected]
    },

    directionLabel() {
      return this.form.direction ? 'encode' : 'decode'
    },

    whichOutputLabel() {
      return this.whichOutput ? 'html' : 'plaintext'
    },
  },

  // created() {
  //   const meowmix = new Audio('./assets/meowmix.ogg')
  //   meowmix.loop = true
  //   meowmix.play()
  // },

  methods: {
    clearOutput() {
      this.output = ''
    },

    generateRandomNumber(max) {
      return Math.ceil(Math.random() * max)
    },

    generateRandomString() {
      const outputStr = []
      let len = this.generateRandomNumber(this.maxRandom)

      while (len) {
        outputStr.push(this.alphabet[this.generateRandomNumber(this.alphabet.length) - 1])
        --len
      }
      return outputStr
    },

    hide(char) {
      return `<span hidden>${ char }</span>`
    },

    span(char) {
      return `<span>${ char }</span>`
    },

    translate() {
      const tags = []
      const output = []

    // ENCODE:
      if(this.form.direction) {
        // split all chars and wrap in hidden span tags
        const message = this.form.input.split('').map(this.hide)

        message.forEach(char => {
          tags.push(char)

          // for each letter append a random number of random characters surrounded by span tags
          this.generateRandomString().forEach(char => tags.push(this.span(char)))
        })

        // line break every 100 visible chars
        let hundred = 1
        for (let i = 0; i < tags.length; ++i) {
          output.push(tags[i])

          if (!tags[i].includes('hidden')) {
            if (hundred === 100) {
              output.push(`<br>`)
              hundred = 1
            }
            else ++hundred
          }
        }

        this.output = output.join('')
      }

    // DECODE:
      else {
        let output = this.form.input

        // remove all visible span inputs
        this.output = output.replace(/<span>.<\/span>/g, '')
        // remove all <br>s
              .replace(/<br>/g, '')
        // remove all remaining tags
              .replace(/<span hidden>/g, '')
              .replace(/<\/span>/g, '')
      }
    },
  }
}
</script>

<style scoped>
@font-face {
  font-family: nyan;
  src: url('./assets/nyan.ttf');
}

.App {
  font-family: Helvetica, Arial, sans-serif;
  overflow-wrap: break-word;
}

.pleb {
  font-family: monospace
}

.nyan {
  font-family: nyan;
}
</style>

