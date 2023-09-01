import { Meta, StoryObj } from '@storybook/react';
import Modal  from './Modal';
import { ModalProps } from './Modal.types';

const meta: Meta<typeof Modal> = {
    component: Modal,
    title: 'Components/Modal',
    argTypes: {
       isOpen: {
           control: 'boolean',
           description: ''
       },
       onClose: {
           control: 'none',
           description: ''
       }
    },
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Modal>

export const Default: Story = {
    args: {
        onClose: () => {},
        isOpen: true,
        title: 'Modal Heading',
    }
} as Meta<ModalProps>;