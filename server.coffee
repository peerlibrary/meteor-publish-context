DDP._CurrentPublish = new Meteor.EnvironmentVariable()

# Override the publish function so that we can set the publish context.
originalPublish = Meteor.publish
Meteor.publish = (name, func) ->
  originalPublish name, (args...) ->
    DDP._CurrentPublish.withValue @, =>
      func.apply @, args
