<p align="center">
  <a href="https://mpds.f3m.pt/" rel="noopener" target="_blank"><img width="350" src="https://i.imgur.com/OANOfLI.png" alt="MPDS logo"></a></p>
</p>

<h1 align="center">MpDS NavTabs</h1>

<div align="center">

[React](https://reactjs.org/) component for faster and simpler web development.
<!--
[![license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/mui-org/material-ui/blob/master/LICENSE)
[![npm latest package](https://img.shields.io/npm/v/@material-ui/core/latest.svg)](https://www.npmjs.com/package/@material-ui/core)
[![npm next package](https://img.shields.io/npm/v/@material-ui/core/next.svg)](https://www.npmjs.com/package/@material-ui/core)
[![npm downloads](https://img.shields.io/npm/dm/@material-ui/core.svg)](https://www.npmjs.com/package/@material-ui/core)
[![CircleCI](https://img.shields.io/circleci/project/github/mui-org/material-ui/next.svg)](https://app.circleci.com/pipelines/github/mui-org/material-ui?branch=next)
[![Coverage Status](https://img.shields.io/codecov/c/github/mui-org/material-ui/next.svg)](https://codecov.io/gh/mui-org/material-ui/branch/next)
[![Follow on Twitter](https://img.shields.io/twitter/follow/MaterialUI.svg?label=follow+Material-UI)](https://twitter.com/MaterialUI)
[![Dependabot Status](https://api.dependabot.com/badges/status?host=github&repo=mui-org/material-ui)](https://dependabot.com)
[![Average time to resolve an issue](https://isitmaintained.com/badge/resolution/mui-org/material-ui.svg)](https://isitmaintained.com/project/mui-org/material-ui 'Average time to resolve an issue')
[![Crowdin](https://badges.crowdin.net/material-ui-docs/localized.svg)](https://translate.material-ui.com/project/material-ui-docs)
[![Open Collective backers and sponsors](https://img.shields.io/opencollective/all/material-ui)](https://opencollective.com/material-ui) -->

</div>

## Installation

MpDS NavTabs is available as an [npm package](npm i mpds-navtabs).

```sh
// with npm
npm i mpds-navtabs

```
## Usage

Here is a quick example to get you started, **it's all you need**:

```tsx
import * as React from "react";
import MpdsNavtabs from "mpds-navtabs"

function App() {
  return <MpdsNavtabs backButtonDisable="true"></MpdsNavtabs>
}

ReactDOM.render(<App />, document.querySelector('#app'));
```

<h4>Props</h4>

<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Description</th>
      <th>Default</th>
    </tr>
    </thead>
      <tbody>
        <tr>
          <td>
            <span>onChangeTabs</span>
          </td>
          <td>
            <div>
              <span>Change event on tabs element</span>
            </div>
            <div>
              <span>((event: ChangeEvent&lt;{}&gt;, value: any) =&gt; void)</span>
            </div>
          </td>
          <td>
            <span>-</span>
          </td>
        </tr>
        <tr>
          <td>
            <span>tabsIndicatorColor</span>
          </td>
          <td>
            <div>
              <span>Tabs indicator Color</span>
            </div>
            <div>
              <div>
                <span>string</span>
              </div>
            </div>
          </td>
          <td>
            <div>
              <span>primary</span>
            </div>
          </td>
        </tr>
        <tr>
          <td>
            <span>backButtonDisable</span>
          </td>
          <td>
            <div>
              <span>Disable the back button</span>
            </div>
            <div>
              <div>
                <span>boolean</span>
              </div>
            </div>
          </td>
          <td>
            <div>
              <span>false</span>
            </div>
          </td>
        </tr>
        <tr>
          <td>
            <span>editControlsRoot</span>
          </td>
          <td>
            <div>
              <span>Insert classes in the root of Edit Controls</span>
            </div>
            <div>
              <div>
                <span>string</span>
              </div>
            </div>
          </td>
          <td>
            <span>-</span>
          </td>
        </tr>
        <tr>
          <td>
            <span>hiddenEditControls</span>
          </td>
          <td>
            <div>
              <span>Hide Edit Controls</span>
            </div>
            <div>
            <div>
              <span>boolean</span>
            </div>
          </div>
        </td>
        <td>
          <div>
            <span>false</span>
          </div>
        </td>
      </tr>
      <tr>
        <td>
          <span>onClickToggleDropdown</span>
        </td>
        <td>
          <div>
            <span>OnClick of dropdown</span>
          </div>
          <div>
            <div>
              <span>any</span>
            </div>
          </div>
        </td>
        <td>
          <span>-</span>
        </td>
      </tr>
      <tr>
        <td>
          <span>arrowToggleDropdownClasses</span>
        </td>
        <td>
          <div>
            <span>Classes of the dropdown classes</span>
          </div>
          <div>
            <div>
              <span>string</span>
            </div>
          </div>
        </td>
        <td>
          <span>-</span>
        </td>
      </tr>
      <tr>
        <td>
          <span>onClickGoBack</span>
        </td>
        <td>
          <div>
            <span>OnClick of back base button</span>
          </div>
          <div>
            <div>
              <span>any</span>
            </div>
          </div>
        </td>
        <td>
          <span>-</span>
        </td>
      </tr>
      <tr>
        <td>
          <span>toggleDropdownTitle</span>
        </td>
        <td>
          <div>
            <span>Dropdown title</span>
          </div>
          <div>
            <div>
              <span>string</span>
            </div>
          </div>
        </td>
        <td>
          <div>
            <span>Report</span>
          </div>
        </td>
      </tr>
      <tr>
        <td>
          <span>hrefToggleDropdown</span>
        </td>
        <td>
          <div>
            <span>Href of the dropdown</span>
          </div>
          <div>
            <div>
              <span>string</span>
            </div>
          </div>
        </td>
        <td>
          <div>
            <span>/</span>
          </div>
        </td>
      </tr>
      <tr>
        <td>
          <span>backButtonTitle</span>
        </td>
        <td>
          <div>
            <span>Text aligned to the right of back button</span>
          </div>
          <div>
            <div>
              <span>string</span>
            </div>
          </div>
        </td>
        <td>
          <div>
            <span>Previous</span>
          </div>
        </td>
      </tr>
      <tr>
        <td>
          <span>dropDownItems</span>
        </td>
        <td>
          <div>
            <span>Text aligned to the right of back button</span>
          </div>
          <div>
            <span>string[]</span>
          </div>
        </td>
        <td>
          <span>['Section1', 'Section2', 'Section3']</span>
        </td>
      </tr>
      <tr>
        <td>
          <span>onClickCreate</span>
        </td>
        <td>
          <div>
            <span>Text aligned to the right of back button</span>
          </div>
          <div>
            <div>
              <span>any</span>
            </div>
          </div>
        </td>
        <td>
          <span>-</span>
        </td>
      </tr>
      <tr>
        <td>
          <span>disableCreate</span>
        </td>
        <td>
          <div>
            <span>Text aligned to the right of back button</span>
          </div>
          <div>
            <div>
              <span>any</span>
            </div>
          </div>
        </td>
        <td>
          <span>-</span>
        </td>
      </tr>
      <tr>
        <td>
          <span>onClickSave</span>
        </td>
        <td>
          <div>
            <span>Text aligned to the right of back button</span>
          </div>
          <div>
            <div>
              <span>any</span>
            </div>
          </div>
        </td>
        <td>
          <span>-</span>
        </td>
      </tr>
      <tr>
        <td>
          <span>disableSave</span>
        </td>
        <td>
          <div>
            <span>Text aligned to the right of back button</span>
          </div>
          <div>
            <div>
              <span>any</span>
            </div>
          </div>
        </td>
        <td>
          <span>-</span>
        </td>
      </tr>
      <tr>
        <td>
          <span>onClickClear</span>
        </td>
        <td>
          <div>
            <span>Text aligned to the right of back button</span>
          </div>
          <div>
            <div>
              <span>any</span>
            </div>
          </div>
        </td>
        <td>
          <span>-</span>
        </td>
      </tr>
      <tr>
        <td>
          <span>disableClear</span>
        </td>
        <td>
          <div>
            <span>Text aligned to the right of back button</span>
          </div>
          <div>
            <div>
              <span>any</span>
            </div>
          </div>
        </td>
        <td>
          <span>-</span></td>
        </tr>
      </tbody>
    </table>
<br>
Yes, it's really all you need to get started! Try it in:
[CodeSandbox](https://codesandbox.io/)
<br>

## License

No License. "(...) nobody else can copy, distribute, or modify your work without being at risk of take-downs, shake-downs, or litigation."
