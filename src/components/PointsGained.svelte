<script lang="ts">
    const { points } = $props();
</script>

<div class="animate-float absolute top-0 left-0">
    <span>𐆖 {points}</span>
</div>

<style>
    .animate-float {
        animation: float 1s ease-out forwards;
    }

    @keyframes float {
        0% {
            transform: translateY(0);
            opacity: 1;
        }
        100% {
            transform: translateY(-20px);
            opacity: 0;
        }
    }
</style>
