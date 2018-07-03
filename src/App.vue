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
          :value="encoding"
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

  <p v-if="whichOutput" v-html="output"/>
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
      const output = []
      // encode
      if(this.form.direction) {
        // separate all strings
        // add hidden tags
        const message = this.form.input.split('').map(this.hide)

        message.forEach(char => {
          output.push(char)
          // for each letter add a random number of random characters after surrounded by span tags
          this.generateRandomString().forEach(char => output.push(this.span(char)))
        })

        // add an invalid <br />
        for(let i = 0; i < output.length; ++i) {
          if (i && !(i % 100)) output.splice(i + 1, 0, `<br>`)
        }

        this.output = output.join('')
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
