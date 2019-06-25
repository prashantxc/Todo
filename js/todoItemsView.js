var TodoItemsView = Backbone.View.extend({
    render: function() {
        var self = this;
        this.model.each(function(todoItem) {
            var view = new TodoItemView({ model: todoItem });
            self.$el.append(view.render().$el);
        });
        return this;
    }
});