import {Component} from 'react'
import {VscBold} from 'react-icons/vsc'
import {GoItalic} from 'react-icons/go'
import {AiOutlineUnderline} from 'react-icons/ai'

import {
  BgCon,
  Card,
  Card1,
  MainHead,
  Img,
  Card2,
  StyleCard,
  ListItem,
  Button,
  HorizantalLine,
  TextArea,
} from './styledComponents'

class TextEditor extends Component {
  state = {isBold: false, isItalic: false, isUnderLine: false}

  onClickBold = () => {
    this.setState(prevState => ({
      isBold: !prevState.isBold,
    }))
  }

  onClickItalic = () => {
    this.setState(prevState => ({
      isItalic: !prevState.isItalic,
    }))
  }

  onClickUnderLine = () => {
    this.setState(prevState => ({
      isUnderLine: !prevState.isUnderLine,
    }))
  }

  render() {
    const {isBold, isItalic, isUnderLine} = this.state

    return (
      <BgCon>
        <Card>
          <Card1>
            <MainHead>Text Editor</MainHead>
            <Img
              src="https://assets.ccbp.in/frontend/react-js/text-editor-img.png"
              alt="text editor"
            />
          </Card1>
          <Card2>
            <StyleCard>
              <ListItem>
                <Button
                  data-testid="bold"
                  onClick={this.onClickBold}
                  active={isBold}
                >
                  <VscBold size={25} />
                </Button>
              </ListItem>
              <ListItem>
                <Button
                  data-testid="italic"
                  onClick={this.onClickItalic}
                  active={isItalic}
                >
                  <GoItalic size={25} />
                </Button>
              </ListItem>

              <ListItem>
                <Button
                  data-testid="underline"
                  onClick={this.onClickUnderLine}
                  active={isUnderLine}
                >
                  <AiOutlineUnderline size={25} />
                </Button>
              </ListItem>
            </StyleCard>
            <HorizantalLine />
            <TextArea
              isBold={isBold}
              isUnderLine={isUnderLine}
              isItalic={isItalic}
            />
          </Card2>
        </Card>
      </BgCon>
    )
  }
}

export default TextEditor
