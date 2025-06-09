<script lang="ts">
    import { getContext } from 'svelte';
    import type { DinarContextStore } from '../contexts/DinarContext.svelte';

    const dinars: DinarContextStore = getContext('DinarStore');
</script>

<span>𐆖 {$dinars}</span>
