# On Meteor >= 1.5.1 we have official DDP._CurrentPublicationInvocation available.
if DDP._CurrentPublicationInvocation
  DDP._CurrentPublish = DDP._CurrentPublicationInvocation
else
  DDP._CurrentPublish = new Meteor.EnvironmentVariable()

  # Override the publish function so that we can set the publish context.
  extendPublish (name, func, options) ->
    newFunc = (args...) ->
      DDP._CurrentPublish.withValue @, =>
        func.apply @, args

    [name, newFunc, options]
