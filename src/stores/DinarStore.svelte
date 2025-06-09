<script module lang="ts">
    import { writable } from 'svelte/store';
    import type { DinarContextStore } from '../contexts/DinarContext.svelte';

    const DinarStore: DinarContextStore = writable(0);

    export { DinarStore };
</script>
