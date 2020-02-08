<template>
    <div>
        <!-- Main content -->
        <section class="content m-2">
            <div class="row justify-content-around">
                <div class="col-12">
                    <div class="card">
                        <div class="card-header">
                            <h3 class="card-title">Post List</h3>
                            <div class="card-tools">
                                <button class="btn btn-primary">
                                    <router-link to="/add-post" class="addbtn">
                                        Add Post
                                    </router-link>
                                </button>
                            </div>
                        </div>
                        <!-- /.card-header -->
                        <div class="card-body">
                            <table id="example2" class="table table-bordered table-hover">
                                <thead>
                                <tr>
                                    <th>S1</th>
                                    <th>User</th>
                                    <th>Category</th>
                                    <th>Title</th>
                                    <th>Description</th>
                                    <th>Photo</th>
                                    <th>Actions</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr v-for="post in allpost" :key="post.id" >
                                    <td>{{post.id}}</td>
                                    <td v-if="post.user">{{post.user.name}}</td>
                                    <td v-else>other</td>
                                    <td v-if="post.category">{{post.category.cat_name}}</td>
                                    <td v-else>other</td>
                                    <td>{{post.title  | sortLength(20,"---")}}</td>
                                    <td>{{post.description | sortLength(40,"...")}}</td>
                                    <td><img :src="ourImage(post.photo)" alt="" width="40" height="50"></td>
                                    <td>
                                        <router-link :to="`/edit-post/${post.id}`">Edit</router-link>
                                        <a href="" @click.prevent="deletePost(post.id)">Delete</a>
                                    </td>
                                </tr>
                                </tbody>
                                <tfoot>
                                <tr>
                                    <th>S1</th>
                                    <th>User</th>
                                    <th>Category</th>
                                    <th>Title</th>
                                    <th>Description</th>
                                    <th>Photo</th>
                                    <th>Actions</th>
                                </tr>
                                </tfoot>
                            </table>
                        </div>
                        <!-- /.card-body -->
                    </div>
                    <!-- /.card -->

                </div>
                <!-- /.col -->
            </div>
            <!-- /.row -->
        </section>
        <!-- /.content -->
    </div>
</template>

<script>
    export default {
        name: "List",
        mounted(){
           this.$store.dispatch('getAllPost')
        },
        computed:{
            allpost(){
                return this.$store.getters.getAllPost
            }
        },
        methods:{
            ourImage(img){
                return "uploadimage/"+img;
            },
            deletePost(id){
                swal.fire({
                    title: 'Are you sure?',
                    text: "You won't be able to revert this!",
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Yes, delete it!'
                }).then((result)=>{
                    if (result.value){
                        axios.get('/delete/'+id)
                            .then(()=>{
                                this.$store.dispatch("getAllPost")
                                swal.fire(
                                    'Deleted!',
                                    'Post has been deleted.',
                                    'success'
                                )
                            })
                    }
                  })
                  .catch(()=>{
                      swal.fire(
                          'Cancelled',
                          'Delete failed',
                          'error'
                      )
                  })
            }
        }
    }
</script>

<style scoped>
    .addbtn{
        color: #fff;
        text-decoration: none;
    }
</style>
