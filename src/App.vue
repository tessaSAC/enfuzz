<!-- Elegantly unscramble this input using the space provided. Then write the scrambler that made it. The answer is an object with global scope that can scramble and unscramble any text any number of times. -->

<template>
<div>

<!-- INPUT -->
  <el-form ref="form" :model="form" label-width="120px" label-position="top">

    <el-form-item label="input">
      <el-input autosize
        type="textarea"
        :placeholder="placeholder"
        v-model="form.input"
      />
    </el-form-item>

    <el-form-item label="encoding">
      <el-select v-model="form.encodingSelected" placeholder="please select an encoding">
        <el-option
          v-for="(encoding, label) in typefaces"
          :key="label"
          :label="label"
          :value="label"
        />
      </el-select>
    </el-form-item>

    <el-form-item :label="directionLabel">
      <el-switch v-model="form.direction" />
    </el-form-item>

    <el-form-item>
      <el-button type="primary" @click="translate">{{ directionLabel }}</el-button>
    </el-form-item>

  </el-form>

<!-- OUTPUT -->

  <el-form label-position="top">
    <el-form-item :label="whichOutputLabel">
      <el-switch v-model="whichOutput" />
    </el-form-item>
  </el-form>

  <p
    v-if="whichOutput"
    v-html="output"
    :class="form.encodingSelected"
  />
  <p v-else>{{ output }}</p>

</div>
</template>

<script>
export default {
  data() {
    return {
      // Settings
      maxRandom: 50,
      typefaces: {
        pleb: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*(){}:',
        nyan: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
      },

      // Form data
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
    }
  },

  methods: {
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
      const tagsChunked = []

      // encode
      if(this.form.direction) {
        // separate all strings
        // add hidden tags
        const message = this.form.input.split('').map(this.hide)

        message.forEach(char => {
          tags.push(char)
          // for each letter add a random number of random characters after surrounded by span tags
          this.generateRandomString().forEach(char => tags.push(this.span(char)))
        })

        // add an invalid <br />
        while(tags.length) {
            tagsChunked.push(tags.splice(0, 100))
        }
        console.log(tagsChunked.map(chunk => chunk.join('')))
        this.output = tagsChunked.map(chunk => chunk.join('')).join(`<br>`)
      } else {
        // remove all non-hidden span inputs
        // remove all brs
        // remove all tags
        // join all strings
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

body {
  font-family: Helvetica, Arial, sans-serif;
}

.pleb {
  font-family: monospace
}

.nyan {
  font-family: nyan;
}
</style>

