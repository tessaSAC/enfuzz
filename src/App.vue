// Elegantly unscramble this input using the space provided. Then write the scrambler that made it. The answer is an object with global scope that can scramble and unscramble any text any number of times.

// remove all non-hidden span inputs
// remove all brs
// remove all tags
// join all strings

// separate all strings
// add hidden tags
// for each letter add a random number of random characters after surrounded by span tags
// add an invalid <br /> tag for each 100 chars

<template>
  <div>
    <el-form ref="form" :model="form" label-width="120px">

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

      <el-form-item :label="direction">
        <el-switch v-model="form.toggle"></el-switch>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="update">{{ direction }}</el-button>
      </el-form-item>

    </el-form>

    <p>{{ output }}</p>

  </div>
</template>

<script>
export default {
  data() {
    return {
      placeholder: 'Elegantly unscramble this input using the space provided. Then write the scrambler that made it. The answer is an object with global scope that can scramble and unscramble any text any number of times.',

      typefaces: {
        pleb: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*(){}:',
        nyan: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
      },

      form: {
        input: '',
        encodingSelected: 'nyan',
        toggle: true
      },

      output: ''
    }
  },

  computed: {
    direction() {
      return this.form.toggle ? 'encode' : 'decode'
    }
  },

  methods: {
    update() {
      // encode
      if(this.form.toggle) {

      } else {
      }
    }
  }
}
</script>
