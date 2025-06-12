<script lang="ts">
    let open = false;

    $: setTimeout(() => {
        open = true;
    }, 1000);
</script>

<div class="flex w-[625px] justify-end {open ? '' : 'hidden'}">
    <img
        alt="The left handle to a scroll"
        src="/scroll-left.png"
        class="h-full max-h-46 w-auto object-contain"
        draggable="false"
    />
    {#if open}
        <div class="slide-in">
            <img
                alt="Scroll paper"
                src="/scroll-paper.png"
                class="h-full max-h-46 object-cover"
                draggable="false"
            />
        </div>
    {/if}
    <img
        alt="The right handle to a scroll"
        src="/scroll-right.png"
        class="h-full max-h-46 w-auto object-contain"
        draggable="false"
    />
</div>

<style>
    @keyframes slideIn {
        from {
            width: 0;
        }

        to {
            width: 580px;
        }
    }

    .slide-in {
        animation: slideIn 1s ease-in-out;
    }
</style>
