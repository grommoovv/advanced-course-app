import { Story } from '@storybook/react';
import { Theme } from '@/shared/const/theme';

export const ThemeDecorator = (theme: Theme) => (StoryComponent: Story) => {
    document.body.setAttribute('data-theme', theme);

    return (
        <div className='app'>
            <StoryComponent />
        </div>
    );
};
