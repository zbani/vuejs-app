<template>
  <div class="panel panel-primary">

    <div class="panel-heading addheading"
      @click="hidepanel =! hidepanel">
      <span class="glyphicon glyphicon-plus"></span> Add Product
    </div>

    <div class="panel-body"
      :class="{ hide: hidepanel }">

      <form class="form-horizontal"
        @submit.prevent="requestAdd">

        <div class="form-group">
          <label class="col-sm-4 control-label" htmlFor="name">Product Name</label>
          <div class="col-sm-8">
            <input type="text" class="form-control" id="name" placeholder="Product's Name"
                v-model="formData.productName" />
          </div>
        </div>

        <div class="form-group">
          <label class="col-sm-4 control-label" htmlFor="code">Product Code</label>
          <div class="col-sm-8">
            <input type="text" class="form-control" id="code" placeholder="Product's Code"
                v-model="formData.productCode" />
          </div>
        </div>

        <div class="form-group">
          <label class="col-sm-4 control-label" htmlFor="releaseDate">Release Date</label>
          <div class="col-sm-8">
            <input type="date" class="form-control" id="releaseDate"
                v-model="formData.releaseDate" />
          </div>
        </div>

        <div class="form-group">
          <label class="col-sm-4 control-label" htmlFor="code">Price</label>
          <div class="col-sm-8">
            <input type="text" class="form-control" id="price" placeholder="Price"
                v-model="formData.price" />
          </div>
        </div>

        <div class="form-group">
          <div class="col-sm-offset-2 col-sm-10">
            <button type="submit" class="btn btn-primary pull-right">Save</button>
          </div>
        </div>

      </form>
    </div>
  </div>
</template>

<script>

export default {

  name: 'AddProduct',
  data() {
    return {
      hidepanel: true,
      formData: []
    }
  },
  methods: {
      requestAdd: function() {
          this.$emit('addProduct', this.formData);
          this.formData = [];
          this.hidepanel = true;
      }
  }

}
</script>

<style scoped>

  .panel-heading {
    cursor: pointer;
  }

</style>
 