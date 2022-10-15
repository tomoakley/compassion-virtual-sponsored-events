const calculateCompletionCheckpointPercentage = (checkpointA, checkpointB = 0, completedDistance) => {

  switch (true) {

    // scenario 1: not reached checkpointA
    case completedDistance < checkpointA: {
      return 0
    }


    // scenario 2: in between checkpointA and checkpointB
    case completedDistance > checkpointA && completedDistance < checkpointB: {
      return completedDistance / (checkpointA + checkpointB)
    }

    // scenario 3: completed both checkpointA and checkpointB
    case completedDistance > checkpointA && completedDistance > checkpointB: {
      return 1
    }

    default:
      return 0
  }
}

export default calculateCompletionCheckpointPercentage
