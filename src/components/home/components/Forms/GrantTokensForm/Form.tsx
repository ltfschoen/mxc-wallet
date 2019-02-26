import React from 'react'
import { Field } from 'redux-form'
import { BtnAction } from '../../../../ui'
import InputField from '../partials/inputField'
import * as StyledComponents from '../StyledComponents'

interface SendFormProps {
  valid: boolean
  handleSubmit: any
}
export const Form = ({ valid, handleSubmit }: SendFormProps) => (
  <StyledComponents.Wrapper>
    <form onSubmit={handleSubmit}>
      
        <StyledComponents.VerticallyStretched>
          <Field
            type="text"
            name="recipient"
            placeholder="Receiving address"
            component={InputField}
          />
          <Field
            type="number"
            name="amount"
            placeholder="Amount"
            component={InputField}
          />
          <Field
            type="number"
            name="cliffPeriods"
            placeholder="Cliff periods (Months)"
            component={InputField}
          />
          <Field
            type="number"
            name="vestingPeriods"
            placeholder="Vesting Periods (Months)"
            component={InputField}
          />
        </StyledComponents.VerticallyStretched>

        <BtnAction Content="Grant Tokens" disabled={!valid} type="submit" icon="icon-t-grant"/>
        
    </form>
  </StyledComponents.Wrapper>
)
