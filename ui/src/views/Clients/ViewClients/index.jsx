import React, { PureComponent, Fragment } from 'react';
import { hot } from 'react-hot-loader';
import { graphql } from 'react-apollo';
import Spinner from '@mozilla-frontend-infra/components/Spinner';
import { withStyles } from '@material-ui/core/styles';
import PlusIcon from 'mdi-react/PlusIcon';
import dotProp from 'dot-prop-immutable';
import Dashboard from '../../../components/Dashboard';
import Search from '../../../components/Search';
import HelpView from '../../../components/HelpView';
import Button from '../../../components/Button';
import ClientsTable from '../../../components/ClientsTable';
import { VIEW_CLIENTS_PAGE_SIZE } from '../../../utils/constants';
import clientsQuery from './clients.graphql';
import { withAuth } from '../../../utils/Auth';
import ErrorPanel from '../../../components/ErrorPanel';

@hot(module)
@withAuth
@graphql(clientsQuery, {
  options: props => ({
    variables: {
      clientOptions: {
        ...(props.history.location.search
          ? { prefix: props.history.location.search.substring(8) }
          : null),
      },
      clientsConnection: {
        limit: VIEW_CLIENTS_PAGE_SIZE,
      },
    },
  }),
})
@withStyles(theme => ({
  plusIcon: {
    ...theme.mixins.fab,
  },
}))
export default class ViewClients extends PureComponent {
  state = {
    clientSearch: '',
    // This needs to be initially null in order for the defaultValue to work
    value: null,
  };

  handleClientSearchSubmit = clientSearch => {
    const {
      data: { refetch },
    } = this.props;

    this.setState({ clientSearch });

    refetch({
      clientOptions: {
        ...(clientSearch ? { prefix: clientSearch } : null),
      },
      clientsConnection: {
        limit: VIEW_CLIENTS_PAGE_SIZE,
      },
    });

    this.props.history.push(
      clientSearch.length > 0 ? `?search=${clientSearch}` : '/auth/clients'
    );
  };

  handleCreate = () => {
    this.props.history.push('/auth/clients/create');
  };

  handlePageChange = ({ cursor, previousCursor }) => {
    const {
      data: { fetchMore },
    } = this.props;

    return fetchMore({
      query: clientsQuery,
      variables: {
        clientsConnection: {
          limit: VIEW_CLIENTS_PAGE_SIZE,
          cursor,
          previousCursor,
        },
        ...(this.state.clientSearch
          ? {
              clientOptions: {
                prefix: this.state.clientSearch,
              },
            }
          : null),
      },
      updateQuery(previousResult, { fetchMoreResult }) {
        const { edges, pageInfo } = fetchMoreResult.clients;

        return dotProp.set(previousResult, 'clients', clients =>
          dotProp.set(
            dotProp.set(clients, 'edges', edges),
            'pageInfo',
            pageInfo
          )
        );
      },
    });
  };

  handleClientSearchChange = ({ target: { value } }) => {
    this.setState({ value });
  };

  render() {
    const {
      classes,
      description,
      data: { loading, error, clients },
    } = this.props;
    const { clientSearch, value } = this.state;

    return (
      <Dashboard
        title="Clients"
        helpView={<HelpView description={description} />}
        search={
          <Search
            disabled={loading}
            onSubmit={this.handleClientSearchSubmit}
            onChange={this.handleClientSearchChange}
            defaultValue={clientSearch}
            value={value}
            placeholder="Client starts with"
          />
        }>
        <Fragment>
          {loading && <Spinner loading />}
          <ErrorPanel error={error} />
          {clients && (
            <ClientsTable
              onPageChange={this.handlePageChange}
              clientsConnection={clients}
            />
          )}
          <Button
            onClick={this.handleCreate}
            variant="round"
            color="secondary"
            className={classes.plusIcon}>
            <PlusIcon />
          </Button>
        </Fragment>
      </Dashboard>
    );
  }
}
