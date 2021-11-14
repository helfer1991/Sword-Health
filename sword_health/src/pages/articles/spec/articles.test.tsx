import { render, screen } from '@testing-library/react';

const mockArticlesList = jest.fn();

jest.doMock('../../../components/articles-list', () => ({
    ArticlesList: mockArticlesList.mockImplementation(() => <div>mockArticlesList</div>)
}))

jest.doMock('../styles', () => ({
    Container: jest.fn(({ children }) => <div>{children}</div>),
  }));

describe('renders Articles', () => {
    it('displays ArticlesList', async () => {
        const { Articles } = await import('../articles');
        render(<Articles />);
        expect(mockArticlesList).toHaveBeenCalledTimes(1);
        expect(mockArticlesList).toHaveBeenCalledWith({
            localStorageKey: 'formData',
            },
            {}
        );
        expect(screen.getByText('mockArticlesList')).toBeInTheDocument();
    });
});