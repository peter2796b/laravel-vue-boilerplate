<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">Profile
                    </div>

                    <div class="card-body">
                        <div class="row">
                            <div class="col-md-3">
                                Role:
                            </div>
                            <div class="col-md-4">
                                {{$user.roles[0]}}
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-3">
                                First Name:
                            </div>
                            <div class="col-md-4">
                                {{$user.first_name}}
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-3">
                                Last Name:
                            </div>
                            <div class="col-md-4">
                                {{$user.last_name}}
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-3">
                                Email:
                            </div>
                            <div class="col-md-4">
                                {{$user.email}}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    created() {
        console.log(this.$user)
    }
}
</script>

<style>

</style>
