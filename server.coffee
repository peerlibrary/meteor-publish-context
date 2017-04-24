DDP._CurrentPublish = new Meteor.EnvironmentVariable()

# Override the publish function so that we can set the publish context.
extendPublish (name, func, options) ->
  newFunc = (args...) ->
    DDP._CurrentPublish.withValue @, =>
      func.apply @, args

  [name, newFunc, options]
