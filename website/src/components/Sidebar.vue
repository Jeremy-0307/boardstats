<template>
	<nav class="navbar bg-body-tertiary">
	  <div class="container-fluid">
	    <button	 class="btn navbar navbar-expand-lg bg-body-tertiary	" data-bs-toggle="offcanvas" href="#mainsidebar" role="button" aria-controls="mainsidebar">
				<span class="material-icons">menu</span>
	</button	>
	  </div>
	</nav>
<div class="offcanvas offcanvas-start" data-bs-scroll="true" data-bs-backdrop="true" tabindex="-1" id="mainsidebar" aria-labelledby="offcanvasExampleLabel">
  <div class="offcanvas-header">
    <h3 class="offcanvas-title" id="offcanvasExampleLabel">Menu</h3>
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div >
  	<ul class="list-group list-group-flush">
  		<li class="text-center list-group-item list-group-item-action" v-for="pagina in Paginas">
  			<router-link class="btn" :to="pagina.ruta">
  				<span class="material-icons">{{pagina.icono}}</span>
  			</router-link>
  		</li>
  	</ul>
  </div>
</div>
</template>


<script setup>
import { ref } from 'vue'

const	Paginas = ref([
		{nombre:'home', ruta:'/', icono:'menu'},
		{nombre:'jugadores', ruta:'/usuarios', icono:'group'},
		{nombre:'estadisticas', ruta:'/estadisticas', icono:'show_chart'},
		{nombre:'clasificaciones', ruta:'/clasificaciones', icono:'leaderboard'},
	])

</script>


<style scoped>

.offcanvas {
	--bs-offcanvas-width: 100px;
}
.offcanvas-header
	.btn-close {
  	display: none;
 	}

</style>

	


