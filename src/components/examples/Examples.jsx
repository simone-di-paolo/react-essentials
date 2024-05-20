import { useState } from 'react'
import { EXAMPLES } from '../../data'
import Section from '../section/Section'
import Tabs from '../tabs/Tabs'
import TabButton from '../TabButton'

export default function Examples() {
  const [selectedTopic, setSelectedTopic] = useState();

  let tabComponent = <p>Please select a topic:</p>
  if (selectedTopic) {
    tabComponent =
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>
            {EXAMPLES[selectedTopic].code}
          </code>
        </pre>
      </div>
  }

  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton);
  }

  return (
    <Section title="Examples" id="examples" className="">
      <Tabs 
        // pass the component identifier
        ButtonsContainer="menu"
        buttons={<>
        <TabButton
          isSelected={selectedTopic === 'components'}
          onClick={() => handleSelect('components')}>
          Components
        </TabButton>
        <TabButton
          isSelected={selectedTopic === 'jsx'}
          onClick={() => handleSelect('jsx')}>
          JSX
        </TabButton>
        <TabButton
          isSelected={selectedTopic === 'props'}
          onClick={() => handleSelect('props')}>
          Props
        </TabButton>
        <TabButton

          isSelected={selectedTopic === 'state'}
          onClick={() => handleSelect('state')}>
          State
        </TabButton>
      </>
      }>{tabComponent}
      </Tabs>
    </Section>
  );
}