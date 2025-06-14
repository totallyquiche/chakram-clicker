<script lang="ts">
    import Scroll from './Scroll.svelte';
    import Salmoneus from './Salmoneus.svelte';
    import Chakram from './items/Chakram.svelte';
</script>

<div class="absolute right-0 -bottom-4 flex h-56 w-[775px] justify-end">
    <div class="absolute left-0 z-10">
        <div class="absolute z-10"><Scroll /></div>
        <div class="chakram absolute z-20 h-auto w-25 translate-1/2 opacity-0">
            <Chakram />
        </div>
    </div>
    <div class="absolute top-10 z-20"><Salmoneus /></div>
</div>

<style>
    @keyframes chakram {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }
    .chakram {
        animation: chakram 1s ease-in-out forwards;
        animation-delay: 2s;
    }
</style>
