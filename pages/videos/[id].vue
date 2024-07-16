<template>
    <div>
    <div>
        Você esta no vídeos de número {{ $route.params.id }}.
    </div>
    <VideoDetalhes />
    <VideoControlePlay />
</div>
</template>

<script>
import { useRoute } from 'vue-router'
export default {
    name: 'PageParametro',
    data() {
        return {
            route: useRoute()
        }
    },
    computed: {
        idParams() {
            return this.route.params.id
        }
    }
}
</script>

<style lang="scss" scoped>

</style>