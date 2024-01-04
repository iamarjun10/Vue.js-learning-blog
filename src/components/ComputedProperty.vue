<template>
<div>
    <h5>Computed Property</h5>
    <p>Has published books (normal usage):</p>
    <span>{{ author.books.length > 0 ? 'Yes' : 'No' }}</span>
    <br><br>
    <!-- 
        computed properties are cached based on their reactive dependencies
        they are used for computing as they are much faster and performance is better. 
    -->
    <p>Has published books(computed usage):</p>
    <span>{{ calculateBooksMessage }}</span>
</div>
</template>

<script>
export default {
    name: 'ComputedProperty',
    data() {
        return {
            author: {
            name: 'John Doe',
            books: [
                'Vue 2 - Advanced Guide',
                'Vue 3 - Basic Guide',
                'Vue 4 - The Mystery'
            ]
        }
        }
    },
    computed: {
        calculateBooksMessage() {
            return this.author.books.length > 0 ? 'Yes' : 'No';
        }
    }
}
</script>

<style>

</style>
