/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * The examples provided by Facebook are for non-commercial testing and
 * evaluation purposes only.
 *
 * Facebook reserves all rights not expressly granted.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
 * OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NON INFRINGEMENT. IN NO EVENT SHALL
 * FACEBOOK BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN
 * AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 *
 * @providesModule UIExplorerPage
 * @flow
 */
'use strict';

var React = require('react');
var ReactNative = require('react-native');
var {
  ScrollView,
  StyleSheet,
  View,
} = ReactNative;

var UIExplorerTitle = require('./UIExplorerTitle');

class UIExplorerPage extends React.Component {
  props: {
    noScroll?: boolean,
    noSpacer?: boolean,
  };

  static propTypes = {
    noScroll: React.PropTypes.bool,
    noSpacer: React.PropTypes.bool,
  };

  render() {
    var ContentWrapper;
    var wrapperProps = {};
    if (this.props.noScroll) {
      ContentWrapper = (View: ReactClass<any>);
    } else {
      ContentWrapper = (ScrollView: ReactClass<any>);
      // $FlowFixMe found when converting React.createClass to ES6
      wrapperProps.automaticallyAdjustContentInsets = !this.props.title;
      wrapperProps.keyboardShouldPersistTaps = 'handled';
      wrapperProps.keyboardDismissMode = 'interactive';
    }
    var title = this.props.title ?
      <UIExplorerTitle title={this.props.title} /> :
      null;
    var spacer = this.props.noSpacer ? null : <View style={styles.spacer} />;
    return (
      <View style={styles.container}>
        {title}
        <ContentWrapper
          style={styles.wrapper}
          {...wrapperProps}>
            {
              // $FlowFixMe found when converting React.createClass to ES6
              this.props.children}
            {spacer}
        </ContentWrapper>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    backgroundColor: '#e9eaed',
    flex: 1,
  },
  spacer: {
    height: 270,
  },
  wrapper: {
    flex: 1,
    paddingTop: 10,
  },
});

module.exports = UIExplorerPage;
