<template>
  <h2>Lorem ipsum</h2>
  <div class="float-right"><a href="https://placeholder.com" title ="placeholder image"><img src="https://via.placeholder.com/150" alt="placeholder image" width='150' height='150' /></a></div>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam non sapien at erat porta varius. Nullam luctus tellus elit, a pellentesque sem imperdiet nec. Duis ac dui hendrerit nibh iaculis sagittis ac nec odio. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aenean ut laoreet turpis. Phasellus vehicula pulvinar blandit. Quisque finibus magna et neque ultrices, in rhoncus augue blandit. Mauris ipsum velit, pulvinar non ante nec, semper auctor lorem. Integer ut auctor erat. Suspendisse vehicula velit sed mauris commodo tempor. Integer dictum facilisis mi et fringilla. Nunc molestie porta eleifend. Aenean bibendum ac arcu sed gravida. Integer cursus nunc vel dolor cursus, non scelerisque massa interdum. Curabitur aliquet risus ut sagittis eleifend.</p>
  <p>Donec interdum risus augue, sed ultrices tellus maximus eget. Maecenas ut mauris et nunc consequat pretium. In fermentum malesuada accumsan. Proin scelerisque massa at quam ornare, at posuere urna dapibus. Aenean posuere, tortor et maximus malesuada, sem ante pharetra diam, id tincidunt justo ex ac nisi. Vestibulum sagittis libero orci, quis tincidunt arcu faucibus ac. Integer tortor nisi, porta id ipsum et, lacinia bibendum purus. Cras commodo vel augue varius fringilla. Vestibulum in nisi ligula. Mauris dolor nunc, convallis et consectetur at, efficitur sit amet elit. Vestibulum ornare ut lectus ac finibus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam nec ligula nec ante semper interdum rhoncus vel mauris</p>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style lang="scss" scoped>
  p {
    color: $primary-color;
    font-size: $font-size-base;
    font-family: $font-family-sans-serif;
  }

  .clearfix {
    @include clearfix;
  }

@media (min-width: 768px) {  
  .float-left {
    float: left;
    padding-right: 1rem;
    padding-bottom: 1rem;
  }

  .float-right {
    float: right;
    padding-left: 1rem;
    padding-bottom: 1rem;
  }
}  
</style>
