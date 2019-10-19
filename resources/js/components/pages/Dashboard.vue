<template>
	<div>
		Dashboard
	</div>
</template>

<script>

	export default{
		data(){
			return{

			}
		},

		created(){
            if (!User.loggedIn()){
                this.$router.push({path: '/login'});
            }
        }
		
	}
	 
</script>