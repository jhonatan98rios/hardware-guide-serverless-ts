import nlow from './nlow.json'
import nmedium from './nmedium.json'
import nhigh from './nhigh.json'
import xlow from './xlow.json'
import low from './low.json'
import medium from './medium.json'
import high from './high.json'
import xhigh from './xhigh.json'

export const train = [
  ...nlow.train,
  ...nmedium.train,
  ...nhigh.train,
  ...xlow.train,
  ...low.train,
  ...medium.train,
  ...high.train,
  ...xhigh.train,
]

