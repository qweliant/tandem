import React, { Component } from "react";
import { createMedia } from "@artsy/fresnel";
import PropTypes from "prop-types";
import Trivia from "./Trivia";
import {
  Button,
  Container,
  Grid,
  Header,
  Icon,
  List,
  Menu,
  Segment,
  Sidebar,
  Visibility,
  Divider,
} from "semantic-ui-react";
import { useCountState } from "../ScoreContext";

function CountDisplay() {
  const { count } = useCountState();
  return <h1>{`Your score is ${count}`}</h1>;
}

function refreshPage() {
  window.location.reload(false);
}

function CounterReset() {
  return (
    <div>
      <Button onClick={refreshPage}>Reset Game</Button>
    </div>
  );
}

const { MediaContextProvider, Media } = createMedia({
  breakpoints: {
    mobile: 0,
    tablet: 768,
    computer: 1024,
  },
});

/* Heads up!
 * HomepageHeading uses inline styling, however it's not the best practice. Use CSS or styled
 * components for such things.
 */
const HomepageHeading = ({ mobile }) => (
  <Container text>
    <Header
      as="h1"
      content="Tandem Quiz Challenge"
      inverted
      style={{
        fontSize: mobile ? "2em" : "4em",
        fontWeight: "normal",
        marginBottom: 0,
        marginTop: mobile ? "1.5em" : "3em",
      }}
    />
    <Header
      as="h2"
      content="Quiz yourself on big facts"
      inverted
      style={{
        fontSize: mobile ? "1.5em" : "1.7em",
        fontWeight: "normal",
        marginTop: mobile ? "0.5em" : "1.5em",
      }}
    />
    <Button primary size="huge" href="#quiz">
      Get Started
      <Icon name="right arrow" />
    </Button>
  </Container>
);

HomepageHeading.propTypes = {
  mobile: PropTypes.bool,
};

/* Heads up!
 * Neither Semantic UI nor Semantic UI React offer a responsive navbar, however, it can be implemented easily.
 * It can be more complicated, but you can create really flexible markup.
 */
class DesktopContainer extends Component {
  state = {};

  hideFixedMenu = () => this.setState({ fixed: false });
  showFixedMenu = () => this.setState({ fixed: true });

  render() {
    const { children } = this.props;
    const { fixed } = this.state;

    return (
      <Media greaterThan="mobile">
        <Visibility
          once={false}
          onBottomPassed={this.showFixedMenu}
          onBottomPassedReverse={this.hideFixedMenu}
        >
          <Segment
            inverted
            textAlign="center"
            style={{ minHeight: 700, padding: "1em 0em" }}
            vertical
          >
            <Menu
              fixed={fixed ? "top" : null}
              inverted={!fixed}
              pointing={!fixed}
              secondary={!fixed}
              size="large"
            >
              <Container>
                <Menu.Item as="a" href="/" active>
                  Home
                </Menu.Item>
                <Menu.Item as="a" href="https://www.qwelian.com">
                  Portfolio
                </Menu.Item>
                <Menu.Item as="a" href="https://github.com/qweliant/tandem">
                  Source
                </Menu.Item>
              </Container>
            </Menu>
            <HomepageHeading />
          </Segment>
        </Visibility>

        {children}
      </Media>
    );
  }
}

DesktopContainer.propTypes = {
  children: PropTypes.node,
};

class MobileContainer extends Component {
  state = {};

  handleSidebarHide = () => this.setState({ sidebarOpened: false });

  handleToggle = () => this.setState({ sidebarOpened: true });

  render() {
    const { children } = this.props;
    const { sidebarOpened } = this.state;

    return (
      <Media as={Sidebar.Pushable} at="mobile">
        <Sidebar.Pushable>
          <Sidebar
            as={Menu}
            animation="overlay"
            inverted
            onHide={this.handleSidebarHide}
            vertical
            visible={sidebarOpened}
          >
            <Menu.Item as="a" href="/">
              Home
            </Menu.Item>
            <Menu.Item as="a" href="https://www.qwelian.com">
              Portfolio
            </Menu.Item>
            <Menu.Item as="a" href="https://github.com/qweliant/tandem">
              Source
            </Menu.Item>
          </Sidebar>

          <Sidebar.Pusher dimmed={sidebarOpened}>
            <Segment
              inverted
              textAlign="center"
              style={{ minHeight: 350, padding: "1em 0em" }}
              vertical
            >
              <Container>
                <Menu inverted pointing secondary size="large">
                  <Menu.Item onClick={this.handleToggle}>
                    <Icon name="sidebar" />
                  </Menu.Item>
                </Menu>
              </Container>
              <HomepageHeading mobile />
            </Segment>

            {children}
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </Media>
    );
  }
}

MobileContainer.propTypes = {
  children: PropTypes.node,
};

const ResponsiveContainer = ({ children }) => (
  /* Heads up!
   * For large applications it may not be best option to put all page into these containers at
   * they will be rendered twice for SSR.
   */
  <MediaContextProvider>
    <DesktopContainer>{children}</DesktopContainer>
    <MobileContainer>{children}</MobileContainer>
  </MediaContextProvider>
);

ResponsiveContainer.propTypes = {
  children: PropTypes.node,
};

const HomepageLayout = () => (
  <ResponsiveContainer>
    <Segment style={{ padding: "8em 0em" }} vertical>
      <Grid container stackable verticalAlign="middle">
        <Grid.Row>
          <Grid.Column textAlign="center">
            <Header as="h3" style={{ fontSize: "2em" }}>
              Instructions
            </Header>
            <p style={{ fontSize: "1.33em" }}>
              <h2>
                <ul>You can only choose one answer</ul>
                <ul>
                  When you are ready to submit your answer, click "Check Answer"
                  to see if it was correct or not
                </ul>
                <ul>
                  Click next, and a card at the top right will pop up with the
                  correct answer
                </ul>
                <ul>Your score will be available to you as you go</ul>
                <ul>
                  If you want to start again, click reset game and take the quiz
                  again
                </ul>
                <ul>Good luck!</ul>
              </h2>
            </p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>

    <Segment style={{ padding: "8em 0em" }} vertical>
      <Grid container stackable verticalAlign="middle">
        <Grid.Row>
          <Grid.Column textAlign="center">
            <Header as="h3" id="quiz" style={{ fontSize: "2em" }}>
              Tandem Quiz
            </Header>

            <CountDisplay />
            <Trivia />
          </Grid.Column>
        </Grid.Row>
      </Grid>
      <Divider
        as="h4"
        className="header"
        horizontal
        style={{ margin: "3em 0em", textTransform: "uppercase" }}
      >
        <CounterReset />
      </Divider>
    </Segment>

    <Segment inverted vertical style={{ padding: "5em 0em" }}>
      <Container>
        <Grid divided inverted stackable>
          <Grid.Row>
            <Grid.Column width={7}>
              <Header inverted as="h4" content="About" />
              <List link inverted>
                <List.Item as="a">Contact</List.Item>
                <List.Item as="a">Goodreads</List.Item>
                <List.Item as="a">Twitter</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={7}>
              <Header as="h4" inverted>
                Edited by Qwelian Tanner. Template provided by <br />{" "}
                <a href="https://react.semantic-ui.com/layouts/homepage/">
                  Sementic-UI
                </a>
              </Header>
              <p>
                If you have any questions contact me qweliantanner@gmail.com
              </p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Segment>
  </ResponsiveContainer>
);

export default HomepageLayout;
