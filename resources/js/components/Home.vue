<template>
	<div>
		Home Page
	</div>
</template>

<script>

	export default{
		data(){
			return{

			}
		},
		
		created(){
            if (User.loggedIn()){
                this.$router.push({path: '/dashboard'});
            }
        }
	}
	 
</script>
