var TodoItemView = Backbone.View.extend({
    tageName: 'li',
    initialize: function(options) {
        if(!(options && options.model)) {
            throw new Error('model is not specified');
        }
    },
    
    render: function() {
        this.$el.html(this.model.get('description'));

        return this;
    }
});