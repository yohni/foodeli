<script lang="ts">
	import '../app.css';
	import Navbar from '../components/Navbar.svelte';
	import Footer from '../views/Footer.svelte';
</script>

<Navbar />
<slot />
<Footer />
