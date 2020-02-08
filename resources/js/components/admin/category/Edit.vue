<template>
    <div>
        <!-- Main content -->
        <section class="content">
            <div class="container-fluid">
                <div class="row justify-content-around mt-2">
                    <!-- left column -->
                    <div class="col-md-6">
                        <!-- general form elements -->
                        <div class="card card-primary">
                            <div class="card-header">
                                <h3 class="card-title">Edit Category</h3>
                            </div>
                            <!-- /.card-header -->
                            <!-- form start -->
                            <form role="form" @submit.prevent="updateCategory()">
                                <div class="card-body">
                                    <div class="form-group">
                                        <label for="categoryId">Edit Category</label>
                                        <input type="text" class="form-control" id="categoryId" placeholder="Add New Category"
                                               v-model="form.cat_name" name="cat_name" :class="{ 'is-invalid': form.errors.has('cat_name') }">
                                        <has-error :form="form" field="cat_name"></has-error>
                                    </div>
                                </div>
                                <!-- /.card-body -->

                                <div class="card-footer">
                                    <button type="submit" class="btn btn-primary">Save</button>
                                </div>
                            </form>
                        </div>
                        <!-- /.card -->
                    </div>
                    <!--/.col (left) -->

                </div>
                <!-- /.row -->
            </div><!-- /.container-fluid -->
        </section>
    </div>
</template>

<script>


    export default {
        name: "Edit",
        mounted(){
            axios.get(`/editcategory/${this.$route.params.categoryid}`)
                .then((response)=>{
                    this.form.fill(response.data.category)
                })
        },
        data(){
            return{
                //create new instance of v-form
                form: new Form({
                    cat_name: '',
                })
            }
        },
        methods:{
            updateCategory(){
                this.form.post(`/update-category/${this.$route.params.categoryid}`)
                    .then((response)=>{
                        this.$router.push('/category-list')

                        toast.fire({
                            icon: 'success',
                            title: 'Category updated successfully'
                        })
                    })
                    .catch((err)=>{
                        alert(err)
                    })
            }
        }
    }
</script>

<style scoped>

</style>
