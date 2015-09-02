App.Views.Comment = Backbone.View.extend({
    className: "comments",
    initialize: function() {
//      this.listenTo(this.model, 'change', this.render);

      this.template = Handlebars.compile($("#commentTemplate").html());
      this.render();
    },

    render: function() {
      this.$el.html(this.template(this.model.toJSON()));
    }
})
