import {Component} from 'react'

import {
  AppContainer,
  MemeGeneratorContainer,
  Heading,
  FormAndMemeContainer,
  MemeContainer,
  TextContent,
  MemeGeneratorForm,
  CustomLabel,
  CustomInput,
  CustomSelect,
  CustomOption,
  GenerateButton,
} from './styledComponents'

const fontSizesOptionsList = [
  {
    optionId: '8',
    displayText: '8',
  },
  {
    optionId: '12',
    displayText: '12',
  },
  {
    optionId: '16',
    displayText: '16',
  },
  {
    optionId: '20',
    displayText: '20',
  },
  {
    optionId: '24',
    displayText: '24',
  },
  {
    optionId: '28',
    displayText: '28',
  },
  {
    optionId: '32',
    displayText: '32',
  },
]

class MemeGenerator extends Component {
  state = {
    imageUrlInput: '',
    topTextInput: '',
    bottomTextInput: '',
    activefontSizeInput: fontSizesOptionsList[0].optionId,
    imageUrl: '',
    topText: '',
    bottomText: '',
    activefontSize: '',
  }

  onChangeUrl = event => {
    this.setState({imageUrlInput: event.target.value})
  }

  onChangeTop = event => {
    this.setState({topTextInput: event.target.value})
  }

  onChangeBottom = event => {
    this.setState({bottomTextInput: event.target.value})
  }

  onChangeFont = event => {
    this.setState({activefontSizeInput: event.target.value})
  }

  onGenerateMeme = event => {
    event.preventDefault()
    const {imageUrlInput, topTextInput, bottomTextInput, activefontSizeInput} =
      this.state

    this.setState({
      imageUrl: imageUrlInput,
      topText: topTextInput,
      bottomText: bottomTextInput,
      activefontSize: activefontSizeInput,
    })
  }

  renderFormGenerator = () => {
    const {imageUrlInput, topTextInput, bottomTextInput, activefontSizeInput} =
      this.state

    return (
      <MemeGeneratorForm onSubmit={this.onGenerateMeme}>
        <CustomLabel htmlFor="imageUrl">Image URL</CustomLabel>
        <CustomInput>
          <input
            type="text"
            onChange={this.onChangeUrl}
            placeholder="Enter the Image URL"
            value={imageUrlInput}
            id="imageUrl"
          />
        </CustomInput>
        <CustomLabel htmlFor="topText">Top Text</CustomLabel>
        <CustomInput>
          <input
            type="text"
            onChange={this.onChangeTop}
            placeholder="Enter the Top Text"
            value={topTextInput}
            id="topText"
          />
        </CustomInput>
        <CustomLabel htmlFor="bottomText">Bottom Text</CustomLabel>
        <CustomInput>
          <input
            type="text"
            onChange={this.onChangeBottom}
            placeholder="Enter the Bottom Text"
            value={bottomTextInput}
            id="bottomText"
          />
        </CustomInput>
        <CustomLabel> Font Size</CustomLabel>
        <CustomSelect
          id="select"
          value={activefontSizeInput}
          onChange={this.onChangeFont}
        >
          {fontSizesOptionsList.map(each => (
            <CustomOption key={each.optionId} value={each.optionId}>
              {each.displayText}
            </CustomOption>
          ))}
        </CustomSelect>
        <GenerateButton type="submit">Generate</GenerateButton>
      </MemeGeneratorForm>
    )
  }

  renderMeme = () => {
    const {imageUrl, topText, bottomText, activefontSize} = this.state

    return (
      <MemeContainer data-testid="meme" imageUrl={imageUrl}>
        <TextContent activefontSize={activefontSize}>{topText}</TextContent>
        <TextContent activefontSize={activefontSize}>{bottomText}</TextContent>
      </MemeContainer>
    )
  }

  render() {
    return (
      <AppContainer>
        <MemeGeneratorContainer>
          <Heading>Meme Generator</Heading>
          <FormAndMemeContainer>
            {this.renderMeme()}
            {this.renderFormGenerator()}
          </FormAndMemeContainer>
        </MemeGeneratorContainer>
      </AppContainer>
    )
  }
}

export default MemeGenerator

// Write your code here
