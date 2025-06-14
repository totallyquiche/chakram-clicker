<script lang="ts">
    let level = $state(0);
</script>

<button
    class="flex items-center justify-center rounded-full transition-all hover:scale-110 hover:cursor-pointer active:scale-95"
    onclick={() => level++}
>
    <span class="absolute pt-4 text-xl">{level}</span>
    <img src="/chakram.png" alt="Chakram" class="h-full w-full" />
</button>
