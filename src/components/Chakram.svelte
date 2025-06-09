<script lang="ts">
    import { getContext } from 'svelte';
    import type { DinarContextStore } from '../contexts/DinarContext.svelte';
    import ChakramMultiplierStore from '../stores/ChakramMultiplierStore';

    const dinars: DinarContextStore = getContext('DinarStore');
</script>

<button class="h-24 w-24" onclick={() => ($dinars += Math.ceil(1 * $ChakramMultiplierStore))}>
    <img
        src="/chakram.png"
        width="560"
        height="553"
        alt="Xena's fabled weapon, the Chakram, a circular metal throwing blade painted with a simple pattern."
    />
</button>
