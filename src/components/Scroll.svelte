<script lang="ts">
    let open = false;

    $: setTimeout(() => {
        open = true;
    }, 1000);
</script>

<div class="slide-in relative flex h-full w-full items-center">
    <img
        alt="The left handle to a scroll"
        src="/scroll-left.png"
        class="h-full max-h-46 w-auto object-contain"
    />
    {#if open}
        <img
            alt="Scroll paper"
            src="/scroll-paper.png"
            class=" h-full max-h-46 w-auto object-contain"
        />
    {/if}
    <img
        alt="The right handle to a scroll"
        src="/scroll-right.png"
        class="h-full max-h-46 w-auto object-contain"
    />
</div>

<style>
    @keyframes slideIn {
        from {
            transform: translate(0%, 100%);
            opacity: 0;
        }

        to {
            transform: translate(0, 0);
            opacity: 1;
        }
    }

    .slide-in {
        animation: slideIn 1s ease-out forwards;
    }
</style>
