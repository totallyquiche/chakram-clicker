<script lang="ts">
    import TimeContext from '../contexts/TimeContext.svelte';
    import DinarContext from '../contexts/DinarContext.svelte';
    import '../app.css';

    let { children } = $props();
</script>

<TimeContext>
    <DinarContext>
        {@render children()}
    </DinarContext>
</TimeContext>
