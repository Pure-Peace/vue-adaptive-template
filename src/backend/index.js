import $axios from './requester'
import $ from './address'

export default {
  test () {
    return $axios.get(`${$.common}/test`)
      .then(response => response.data)
  }
}
