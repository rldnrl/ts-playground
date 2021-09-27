import React, { useState } from 'react'
import Editor from '@monaco-editor/react'
import { isString } from '@utils/type-guard'

const CodeEditor = () => {
  const [typescript, setTypescript] = useState("")

  return (
    <Editor
      height="600px"
      defaultLanguage="typescript"
      defaultValue={typescript}
      options={{
        fontSize: "15",
        tabSize: 2,
      }}
      onChange={(value) => {
        if (isString(value)) {
          setTypescript(value)
        }
      }}
    />
  )
}

export default CodeEditor
