export default {
  template: "<div>My Girl<span> {{goals}}</span><span> {{height}}</span></div>",
    props: ['height'],
      data(){
    return {
      goals: 'many'
    }
  }
};