import BigNumber from 'bignumber.js'
import * as R from 'ramda'
import Web3 from 'web3'

export const create: (
  value: string | number | BigNumber
) => BigNumber = R.constructN(1, BigNumber as any)

export const toString: (value: BigNumber) => string = (value: BigNumber) =>
  value.toString(10)

export const multipliedBy = R.curry(
  (value1: BigNumber, value2: BigNumber): BigNumber =>
    create(value2).multipliedBy(create(value1))
)

export const dividedBy = R.curry(
  (value1: BigNumber, value2: BigNumber): BigNumber =>
    create(value2).div(create(value1))
)

export const fromWei: (value: BigNumber) => BigNumber = (value: BigNumber) =>
  create(Web3.utils.fromWei(value.toString(10), 'ether'))

export const toWei: (value: BigNumber) => BigNumber = (value: BigNumber) =>
  create(Web3.utils.toWei(value.toString(10), 'ether'))

export const subtract = R.curry(
  (num1: BigNumber, num2: BigNumber): BigNumber => num2.minus(num1)
)
