import React from 'react';
import './overview.css';
import { Accordion } from '../../../components/Accordion';
import { Avatar } from '../../../components/Avatar';
import { Badge } from '../../../components/Badge';
import { Button } from '../../../components/Button';
import { Calendar } from '../../../components/Calendar';
import { DataTable } from '../../../components/DataTable';
// import { Dialog } from '../../../components/Dialog';
import { Editor } from '../../../components/Editor';
import { IconField } from '../../../components/IconField';
import { InputNumber } from '../../../components/InputNumber';
import { InputPassword } from '../../../components/InputPassword';
// import { InputSwitch } from '../../../components/InputSwitch';
import { InputText } from '../../../components/InputText';
import { InputTextArea } from '../../../components/InputTextArea';
import { MultiSelect } from '../../../components/MultiSelect';
import { Paginator } from '../../../components/Paginator';
import { SelectButton } from '../../../components/SelectButton';
import { Skeleton } from '../../../components/Skeleton';
import { TabMenu } from '../../../components/TabMenu';
import { TabView } from '../../../components/TabView';
import '../../../theme.css';

export const Overview: React.FC = () => {

  return (
    <article>

      <section className="storybook-page">
        <h2>OverView DS</h2>
        <p>Visualização de todos os componentes do Design System</p>

        <div className="components-grid">
          <div className="component-card">
            <h3>Accordion</h3>
            <Accordion />
          </div>

          <div className="component-card">
            <h3>Avatar</h3>
            <Avatar />
          </div>

          <div className="component-card">
            <h3>Badge</h3>
            <Badge />
          </div>

          <div className="component-card">
            <h3>Button</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                <Button label="Primary" />
                <Button label="Success" severity="success" />
                <Button label="Info" severity="info" />
                <Button label="Warning" severity="warning" />
                <Button label="Danger" severity="danger" />
              </div>
              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                <Button label="Save" icon="pi pi-check" />
                <Button icon="pi pi-search" aria-label="Search" />
                <Button label="Next" icon="pi pi-arrow-right" iconPos="right" />
              </div>
              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                <Button label="Outlined" outlined />
                <Button label="Text" text />
                <Button label="Raised" raised />
                <Button label="Rounded" rounded />
              </div>
              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                <Button label="Small" size="small" />
                <Button label="Normal" />
                <Button label="Large" size="large" />
              </div>
              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                <Button label="Loading" loading />
                <Button label="Disabled" disabled />
              </div>
            </div>
          </div>

          <div className="component-card">
            <h3>Calendar</h3>
            <Calendar />
          </div>

          <div className="component-card">
            <h3>DataTable</h3>
            <DataTable />
          </div>

          {/* <div className="component-card">
            <h3>Dialog</h3>
            <Dialog />
          </div> */}

          <div className="component-card">
            <h3>Editor</h3>
            <Editor />
          </div>

          <div className="component-card">
            <h3>IconField</h3>
            <IconField />
          </div>

          <div className="component-card">
            <h3>InputNumber</h3>
            <InputNumber />
          </div>

          <div className="component-card">
            <h3>InputPassword</h3>
            <InputPassword />
          </div>

          {/* <div className="component-card">
            <h3>InputSwitch</h3>
            <InputSwitch />
          </div> */}

          <div className="component-card">
            <h3>InputText</h3>
            <InputText />
          </div>

          <div className="component-card">
            <h3>InputTextArea</h3>
            <InputTextArea />
          </div>

          <div className="component-card">
            <h3>MultiSelect</h3>
            <MultiSelect />
          </div>

          <div className="component-card">
            <h3>Paginator</h3>
            <Paginator />
          </div>

          <div className="component-card">
            <h3>SelectButton</h3>
            <SelectButton />
          </div>

          <div className="component-card">
            <h3>Skeleton</h3>
            <Skeleton />
          </div>

          <div className="component-card">
            <h3>TabMenu</h3>
            <TabMenu />
          </div>

          {/* <div className="component-card">
            <h3>TabPanel</h3>
            <TabPanel />
          </div> */}

          <div className="component-card">
            <h3>TabView</h3>
            <TabView />
          </div>
        </div>

      </section>
    </article>
  );
};
