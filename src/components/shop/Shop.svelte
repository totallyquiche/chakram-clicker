<script lang="ts">
    import Scroll from './Scroll.svelte';
    import Salmoneus from './Salmoneus.svelte';
    import Chakram from './items/Chakram.svelte';
    import Argo from './items/Argo.svelte';
</script>

<div class="absolute right-0 -bottom-4 flex h-56 w-[775px] justify-end">
    <div class="absolute left-0 z-10">
        <div class="absolute z-10"><Scroll /></div>
        <div
            class="items absolute z-20 flex h-56 w-[775px] items-center justify-start gap-5 px-10 pb-4 opacity-0"
        >
            <Chakram />
            <Argo />
        </div>
    </div>
    <div class="absolute top-10 z-20"><Salmoneus /></div>
</div>

<style>
    @keyframes items {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }
    .items {
        animation: items 1s ease-in-out forwards;
        animation-delay: 2s;
    }
</style>
