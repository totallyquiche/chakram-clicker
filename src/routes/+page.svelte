<script lang="ts">
    import Score from '../components/Score.svelte';
    import Chakram from '../components/Chakram.svelte';
</script>

<div class="m-12">
    <div class="text-5xl leading-normal"><Score /></div>
    <div class="absolute top-0 left-0 flex h-full w-full items-center justify-center">
        <Chakram />
    </div>
</div>
