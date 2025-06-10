<script lang="ts">
    let { variant = 1 } = $props();
</script>

<img src={`/denarius-${variant}.png`} alt="A crudely made gold coin with a face embossed on it." />
