declare module 'react-input-mask' {
  import * as React from 'react'

  export interface Selection {
    start: number
    end: number
  }

  export interface InputState {
    value: string
    selection: Selection | null
  }

  export interface BeforeMaskedStateChangeStates {
    previousState: InputState
    currentState: InputState
    nextState: InputState
  }

  export interface MaskOptions {
    mask: string
    maskChar: string | null
    alwaysShowMask: boolean
    formatChars: Record<string, any>
    permanents: Array<number>
  }

  export interface InputMaskProps
    extends React.InputHTMLAttributes<HTMLInputElement> {
    mask: string | Array<string | RegExp>
    maskChar?: string | null
    formatChars?: Record<string, any>
    maskPlaceholder?: string | null
    alwaysShowMask?: boolean
    inputRef?: React.Ref<HTMLInputElement>

    beforeMaskedValueChange?(
      newState: InputState,
      oldState: InputState,
      userInput: string | null,
      maskOptions: MaskOptions,
    ): InputState
  }

  export class ReactInputMask extends React.Component<InputMaskProps> {}

  export default ReactInputMask
}
