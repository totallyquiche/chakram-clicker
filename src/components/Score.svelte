<script lang="ts">
    import { getContext } from 'svelte';
    import type { DinarContextStore } from '../contexts/DinarContext.svelte';

    const dinars: DinarContextStore = getContext('DinarStore');

    const currencyFormatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
        currencyDisplay: 'code'
    });
</script>

<span class="text-shadow-lg text-shadow-slate-900"
    >{currencyFormatter.format($dinars).replace('USD', '𐆖')}</span
>
