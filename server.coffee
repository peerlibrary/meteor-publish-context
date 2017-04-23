DDP._CurrentPublish = new Meteor.EnvironmentVariable()

# Override the publish function so that we can set the publish context.
originalPublish = Meteor.publish
Meteor.publish = (name, func, options) ->
  if (_.isObject(name)) {
    originalPublish name, func, options
    return
  }

  originalPublish name, (args...) ->
    DDP._CurrentPublish.withValue @, =>
      func.apply @, args
  ,
    options
