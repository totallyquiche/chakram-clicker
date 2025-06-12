<script lang="ts">
    let audio: HTMLAudioElement;

    setTimeout(() => audio && audio.play(), 250);
</script>

<img
    class="slide-in"
    alt="Salmoneus grinning deviously"
    src="/salmoneus.png"
    width="520"
    height="411"
    draggable="false"
/>

<audio src="/salmoneus-so-smooth.mp3" bind:this={audio}></audio>

<style>
    @keyframes slideIn {
        from {
            transform: translate(-100%, 100%);
        }

        to {
            transform: translate(0, 0);
        }
    }

    .slide-in {
        animation: slideIn 1s ease-out forwards;
    }
</style>
